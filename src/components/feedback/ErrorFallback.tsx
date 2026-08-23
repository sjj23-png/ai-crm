interface Props {
  error?: Error;

  reset?: () => void;
}

export default function ErrorFallback({
  error,
  reset,
}: Props) {
  return (
    <div>

      <h2>
        Something went wrong.
      </h2>

      {error && (
        <p>
          {error.message}
        </p>
      )}

      {reset && (
        <button
          onClick={reset}
        >
          Try Again
        </button>
      )}

    </div>
  );
}