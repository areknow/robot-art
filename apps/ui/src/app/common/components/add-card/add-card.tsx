import { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { ReactComponent as UploadIcon } from '../../../../assets/upload.svg';
import { Button, Card } from '../../components';
import { Input } from '../input/input';
import {
  StyledAddButton,
  StyledButtons,
  StyledClearButton,
  StyledContent,
  StyledUpload,
} from './styles';

interface AddCardProps {
  onAddClick: (file: File, name: string) => void;
}

export const AddCard = ({ onAddClick }: AddCardProps) => {
  const [name, setName] = useState('');
  const [file, setFile] = useState<File | undefined>(undefined);

  const {
    acceptedFiles,
    isDragActive,
    getRootProps,
    getInputProps,
  } = useDropzone({
    maxFiles: 1,
    accept: 'image/*',
  });

  useEffect(() => {
    if (acceptedFiles[0]) {
      setFile(acceptedFiles[0]);
    }
  }, [acceptedFiles]);

  const clearValues = () => {
    setName('');
    setFile(undefined);
  };

  return (
    <Card>
      <h3>Add Robot</h3>
      <StyledContent>
        <Input value={name} label="Name" onChange={setName} />
        <StyledUpload {...getRootProps()} dragActive={isDragActive}>
          <UploadIcon />
          <input {...getInputProps()} />
          <div>{file ? file.name : 'Drag and drop image or select'}</div>
        </StyledUpload>
        <StyledButtons>
          <StyledClearButton onClick={clearValues}>Clear</StyledClearButton>
          <StyledAddButton>
            <Button
              disabled={name.length === 0 || file === undefined}
              onClick={() => onAddClick(file as File, name)}
            >
              Add Robot
            </Button>
          </StyledAddButton>
        </StyledButtons>
      </StyledContent>
    </Card>
  );
};
