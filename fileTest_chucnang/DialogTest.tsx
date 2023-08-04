import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

interface DropdownDialogProps {
    open: boolean;
    onClose: () => void;
}
const DialogTest: React.FC<DropdownDialogProps> = ({ open, onClose }) => {
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleChange = (event: SelectChangeEvent<string>) => {
      setSelectedOption(event.target.value);
    };
    return (
        <Dialog open={open} onClose={onClose}>
      <DialogTitle>Lựa chọn của bạn</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Hãy lựa chọn một tùy chọn từ danh sách bên dưới:
        </DialogContentText>
        <FormControl fullWidth>
          <Select
            value={selectedOption}
            onChange={handleChange}
          >
            <MenuItem value="option1">Tùy chọn 1</MenuItem>
            <MenuItem value="option2">Tùy chọn 2</MenuItem>
            <MenuItem value="option3">Tùy chọn 3</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Đóng</Button>
      </DialogActions>
    </Dialog>
    )
}

export default DialogTest

const styles = StyleSheete.create({})