import { Button, makeStyles } from "@material-ui/core"
import { useEthers } from "@usedapp/core"
import { MuiThemeProvider, createTheme } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4),
    display: "flex",
    justifyContent: "flex-end",
    gap: theme.spacing(1)
  },
}))

export const Header = () => {
  const classes = useStyles()

  const { account, activateBrowserWallet, deactivate } = useEthers()

  const isConnected = account !== undefined
  const blackTheme = createTheme({ palette: { primary: {
    main: '#000000'
  } } })

  

  return (
    <div className={classes.container}>
      {isConnected ? (
        <>
        <MuiThemeProvider theme={blackTheme}>
          <Button color="primary" variant="contained">
            {`${account?.slice(0, 4)}...${account?.slice(-3)}`}
          </Button>
          <Button variant="contained" onClick={deactivate}>
            Disconnect
          </Button>
          </MuiThemeProvider>
        </>
      ) : (
        <MuiThemeProvider theme={blackTheme}>
        <Button
          color="primary"
          variant="contained"
          onClick={() => activateBrowserWallet()}
        >
          Connect
        </Button>
        </MuiThemeProvider>
      )}
    </div>
  )
}
