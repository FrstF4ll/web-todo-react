import s from './Atom.module.css';

export const DangerButton = ({ text, ...props }: { text: string }) => (
  <button className="danger-button" {...props}>
    {text}
  </button>
);

export const StatusMessage = ({ statusMessage }: { statusMessage: string }) => {
  return <p className={s.statusMessage}>{statusMessage}</p>;
};
