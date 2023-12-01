export type inputFieldType = {
  name: string;
  placeholder: string;
  value: string;
  disabled: boolean;
  onChange: (e: React.FormEvent<HTMLTextAreaElement>) => void;
  additionalClass?: string;
};
