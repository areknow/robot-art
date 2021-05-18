import { memo } from 'react';
import { Card } from '../../components';
import { Upload } from '../upload/upload';
import { CARD_TITLE } from './constants';

interface AddCardProps {
  /** Event triggered when the card 'Add Robot' button is clicked. */
  onAdd: (file: File, name: string) => void;
}

export const AddCard = memo(({ onAdd }: AddCardProps) => {
  return (
    <Card>
      <h3>{CARD_TITLE}</h3>
      <Upload onUpload={onAdd} />
    </Card>
  );
});
