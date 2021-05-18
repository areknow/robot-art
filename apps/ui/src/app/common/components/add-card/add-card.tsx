import { memo } from 'react';
import { Card } from '../../components';
import { Upload } from '../upload/upload';

interface AddCardProps {
  /** Event triggered when the card 'Add Robot' button is clicked. */
  onAdd: (file: File, name: string) => void;
}

export const AddCard = memo(({ onAdd }: AddCardProps) => {
  return (
    <Card>
      <h3>Add Robot</h3>
      <Upload onUpload={onAdd} />
    </Card>
  );
});
