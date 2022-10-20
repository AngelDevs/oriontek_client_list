interface Props {
  htmlForm: string;
  labelText: string;
  children?: React.ReactNode;
}

const FormControl = (props: Props) => {
  const { htmlForm, labelText, children } = props;

  return (
    <div className="form-control">
      <label htmlFor={htmlForm} className="label">
        <span className="label-text">{labelText}</span>
      </label>
      {children}
    </div>
  );
};

export default FormControl;
