import { memo } from 'react';
import { Card } from '../../components';
import { Upload } from '../upload/upload';

interface AddCardProps {
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
