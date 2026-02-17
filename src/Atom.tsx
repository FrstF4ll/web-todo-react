export const DangerButton = ({ text, ...props }: { text: string }) => (
  <button className="danger-button" {...props}>
    {text}
  </button>
);

export const StatusMessage = ({ statusMessage }: { statusMessage: string }) => {
  return <p>{statusMessage}</p>;
};