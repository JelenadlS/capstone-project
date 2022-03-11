import Button from './Button.js';

export default function DeleteModal() {
  return (
    <section>
      <p>Are you sure you want to delete?</p>
      <Button fontSize="14px" type="submit">
        no, I want to keep it
      </Button>
      <Button fontSize="10px" padding="13px" type="submit">
        please delete
      </Button>
    </section>
  );
}
