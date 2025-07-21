import { List, Typography, Button, styled, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Loglogic = () => {
  const navigate = useNavigate();

  const rememberedUser = JSON.parse(localStorage.getItem('rememberedUser'));
  const sessionUser = JSON.parse(sessionStorage.getItem('sessionUser'));
  const activeUser = rememberedUser || sessionUser;

  const handleLogout = () => {
    localStorage.removeItem('rememberedUser');
    sessionStorage.removeItem('sessionUser');
    navigate('/');
  };

  const StyledTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(() => ({
    [`& .MuiTooltip-tooltip`]: {
      backgroundColor: 'white',
      color: 'black',
      boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
      padding: 8,
      borderRadius: 4,
    },
  }));

  return (
    <List sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "15px" }}>
      {activeUser ? (
        <>
          <Typography
            variant='body1'
            sx={{
              fontFamily: "Poppins",
              fontWeight: "bold",
              fontSize: "20px",
              cursor: "pointer"
            }}
          >
            <StyledTooltip
              title={
                <Button
                  variant="contained"
                  size="small"
                  onClick={handleLogout}
                  sx={{
                    backgroundColor: 'red',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#cc0000',
                    },
                  }}
                >
                  Logout
                </Button>
              }
              placement="bottom"
              arrow
            >
              <span>Welcome, {activeUser.email?.slice(0, 5)}...</span>
            </StyledTooltip>
          </Typography>
        </>
      ) : (
        <Typography
          variant='body1'
          sx={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            fontSize: "20px",
            cursor: "pointer"
          }}
          onClick={() => navigate('/log')}
        >
          Log / SignUp
        </Typography>
      )}
    </List>
  );
};

export default Loglogic;
