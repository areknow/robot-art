import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { ReactComponent as UploadIcon } from '../../../../assets/upload.svg';
import { Button } from '../../components';
import { Input } from '../input/input';
import { ACCEPTED_IMAGE_MIME, DRAG_DROP_LABEL } from './constants';
import {
  StyledAddButton,
  StyledButtons,
  StyledClearButton,
  StyledContent,
  StyledUpload,
} from './styles';

interface UploadProps {
  onUpload: (file: File, name: string) => void;
}

export const Upload = ({ onUpload }: UploadProps) => {
  const [name, setName] = useState('');
  const [file, setFile] = useState<File | undefined>(undefined);

  const {
    acceptedFiles,
    isDragActive,
    getRootProps,
    getInputProps,
  } = useDropzone({
    maxFiles: 1,
    accept: ACCEPTED_IMAGE_MIME,
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
    <StyledContent>
      <Input value={name} label="Name" onChange={setName} />
      <StyledUpload {...getRootProps()} dragActive={isDragActive}>
        <UploadIcon />
        <input {...getInputProps()} />
        <div>{file ? file.name : DRAG_DROP_LABEL}</div>
      </StyledUpload>
      <StyledButtons>
        <StyledClearButton onClick={clearValues}>Clear</StyledClearButton>
        <StyledAddButton>
          <Button
            disabled={name.length === 0 || file === undefined}
            onClick={() => onUpload(file as File, name)}
          >
            Add Robot
          </Button>
        </StyledAddButton>
      </StyledButtons>
    </StyledContent>
  );
};
