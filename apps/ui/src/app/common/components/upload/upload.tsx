import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { ReactComponent as UploadIcon } from '../../../../assets/upload.svg';
import { Button } from '../../components';
import { Input } from '../input/input';
import {
  ACCEPTED_IMAGE_MIME,
  ADD_ROBOT_LABEL,
  CANCEL_LABEL,
  CLEAR_LABEL,
  DRAG_DROP_LABEL,
  SAVE_ROBOT_LABEL,
} from './constants';
import {
  StyledAddButton,
  StyledButtons,
  StyledClearButton,
  StyledContent,
  StyledUpload,
} from './styles';

interface UploadProps {
  defaultName?: string;
  editing?: boolean;
  onUpload: (file: File, name: string) => void;
  onClearClick?: () => void;
}

export const Upload = ({
  defaultName = '',
  editing = false,
  onClearClick = () => null,
  onUpload,
}: UploadProps) => {
  const [name, setName] = useState(defaultName);
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
    onClearClick();
  };

  const disabledButtonState = () => {
    if (editing) {
      return false;
    } else {
      return name.length === 0 || file === undefined;
    }
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
        <StyledClearButton onClick={clearValues}>
          {editing ? CANCEL_LABEL : CLEAR_LABEL}
        </StyledClearButton>
        <StyledAddButton>
          <Button
            disabled={disabledButtonState()}
            onClick={() => onUpload(file as File, name)}
          >
            {editing ? SAVE_ROBOT_LABEL : ADD_ROBOT_LABEL}
          </Button>
        </StyledAddButton>
      </StyledButtons>
    </StyledContent>
  );
};
