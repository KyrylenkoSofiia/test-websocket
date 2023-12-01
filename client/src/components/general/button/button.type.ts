export enum buttonType {
  button = "button",
  submit = "submit",
  reset = "reset",
}
export type buttonProps = {
  buttonContent: string | JSX.Element;
  type: buttonType;
  disabled: boolean;
  onClick?: () => void;
  additionalClass?: string;
};
