import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export default function Actions({ actions }) {
  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      {actions.map((action) => (
        <Tooltip title={action.name} key={action.name}>
          <IconButton >
            {action.icon}
          </IconButton>
        </Tooltip>
      ))}
    </Box>
  );
}

