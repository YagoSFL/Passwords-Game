import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import useNavigateToList from '../../../navigation/hooks/useNavigateToList';
import useNavigateToGame from '../../../navigation/hooks/useNavigateToGame';

const MenuContent = () => {
  const navigateToList = useNavigateToList();
  const navigateToGame = useNavigateToGame();
  return (
    <>
      <List>
        <ListItem
          button
          key="Game"
          onClick={navigateToGame}
          style={{ paddingLeft: '23px' }}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Game" />
        </ListItem>
        <ListItem
          button
          key="List"
          onClick={navigateToList}
          style={{ paddingLeft: '23px' }}
        >
          <ListItemIcon>
            <VideogameAssetIcon />
          </ListItemIcon>
          <ListItemText primary="List" />
        </ListItem>
      </List>
      <Divider />
    </>
  );
};

export default MenuContent;
