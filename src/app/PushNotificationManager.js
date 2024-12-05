"use client";

import { useState, useEffect } from "react";
import { subscribeUser, unsubscribeUser, sendNotification } from "./actions";
import { toast } from "react-toastify";

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

export default function PushNotificationManager() {
  const [isSupported, setIsSupported] = useState(false);
  const [subscription, setSubscription] = useState(null);
  const [message, setMessage] = useState("");
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      setIsSupported(true);
      registerServiceWorker();
    } else {
      toast.error("Push notifications are not supported.");
    }

    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });

    // Retrieve subscription from local storage
    const storedSubscription = localStorage.getItem("pushSubscription");
    if (storedSubscription) {
      setSubscription(JSON.parse(storedSubscription));
    }
  }, []);

  async function registerServiceWorker() {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
        updateViaCache: "none",
      });
      const sub = await registration.pushManager.getSubscription();
      if (sub) {
        setSubscription(sub);
        localStorage.setItem("pushSubscription", JSON.stringify(sub));
      } else {
        toast.info("No existing subscription found, subscribing...");
        await subscribeToPush();
      }
    } catch (error) {
      toast.error("Service Worker registration failed:", error);
    }
  }

  async function subscribeToPush() {
    try {
      const registration = await navigator.serviceWorker.ready;
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        const sub = await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(
            process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
          ),
        });
        setSubscription(sub);
        localStorage.setItem("pushSubscription", JSON.stringify(sub));
        await subscribeUser({
          endpoint: sub.endpoint,
          keys: {
            p256dh: sub.getKey("p256dh"),
            auth: sub.getKey("auth"),
          },
        });
      } else {
        toast.error("Push notifications permission denied");
      }
    } catch (error) {
      toast.error("Failed to subscribe to push notifications:", error);
    }
  }

  async function unsubscribeFromPush() {
    if (subscription) {
      await subscription.unsubscribe();
      setSubscription(null);
      localStorage.removeItem("pushSubscription");
      await unsubscribeUser();
    }
  }

  async function sendTestNotification() {
    if (subscription) {
      await sendNotification(message);
      setMessage("");
    }
  }

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          toast.success("Installing app...");
        } else {
          toast.warning("Oops, something went wrong");
        }
        setDeferredPrompt(null);
      });
    }
  };

  if (!isSupported) {
    return <p>Push notifications are not supported in this browser.</p>;
  }

  return (
    <div>
      <h3>Push Notifications</h3>
      {subscription ? (
        <>
          <p>You are subscribed to push notifications.</p>
          <button onClick={unsubscribeFromPush}>Unsubscribe</button>
          <input
            type="text"
            placeholder="Enter notification message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ minWidth: '200px' }}
          />
          <button onClick={sendTestNotification}>Send Test</button>
        </>
      ) : (
        <>
          <p>You are not subscribed to push notifications.</p>
          <button onClick={subscribeToPush}>Subscribe</button>
        </>
      )}
      {deferredPrompt && (
        <button onClick={handleInstallClick}>Install App</button>
      )}
    </div>
  );
}
