import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { styled } from '@mui/material';
import Chip from '@mui/material/Chip';

interface CustomChipProps {
  color?: string;
  label?:String;
  avatar?:"circle"|"avatar"|"none";
}

const CustomCircleIcon = (color: any) => {
  return (
    <div
      style={{
        backgroundColor: color.color,
        border: '1px solid white',
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        marginLeft: "10px"

      }}
    />
  );
};

const CustomChip = styled(Chip)({
  margin: '20px',
  cursor :"pointer"
});

const Badge = () => {
  return (
    <div>
      <CustomChip
        color='success'
        label="Custom Chip"
        variant='filled'
        //avatar={<CustomCircleIcon color={"yellow"} />}
         deleteIcon ={<ArrowForwardIcon sx={{fontSize:"5px"}}/>}
        onDelete={() => { }}
      />
    </div>
  );
};

export default Badge;
