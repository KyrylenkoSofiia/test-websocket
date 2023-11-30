export type inputFieldType = {
  type: React.HTMLInputTypeAttribute;
  name: string;
  placeholder: string;
  value: string;
  disabled: boolean;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
};
