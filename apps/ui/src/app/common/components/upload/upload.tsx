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
  /** The optional name to preload the edit input with. */
  defaultName?: string;
  /** Whether or not the component is acting on a fresh robot or an existing robot. */
  editing?: boolean;
  /** The event fired when the upload completes. */
  onUpload: (file: File, name: string) => void;
  /** The event fired when the clear button is clicked. */
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
    // Only accept image file types
    accept: ACCEPTED_IMAGE_MIME,
  });

  /** Effect: when the drop zone updates, store the files data. */
  useEffect(() => {
    if (acceptedFiles[0]) {
      setFile(acceptedFiles[0]);
    }
  }, [acceptedFiles]);

  /** Reset the upload form. */
  const clearValues = () => {
    setName('');
    setFile(undefined);
    onClearClick();
  };

  /**
   * Decide whether or not the save button should be disabled.
   * If the robot is being edited, don't disable at all.
   * If the robot is being added, only enable when the form is complete.
   * @returns
   */
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
