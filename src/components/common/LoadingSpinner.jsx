export default function LoadingSpinner({ className }) {
  return (
    <div
      className={`flex flex-col items-center justify-center h-full gap-4 ${className}`}
    >
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
  );
}
