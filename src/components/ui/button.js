export function Button({ className, children, ...props }) {
    return (
      <button className={`px-4 py-2 rounded-lg ${className}`} {...props}>
        {children}
      </button>
    );
  }
  