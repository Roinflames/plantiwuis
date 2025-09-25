import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, alpha, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useTranslation } from 'react-i18next';

const AppNavbar = ({ onSearchChange, families, selectedFamily, onFamilyChange }) => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Plantiwuis
        </Typography>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="language-select-label">{t('language')}</InputLabel>
          <Select
            labelId="language-select-label"
            id="language-select"
            value={i18n.language}
            label={t('language')}
            onChange={handleLanguageChange}
          >
            <MenuItem value="es">Español</MenuItem>
            <MenuItem value="en">English</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="family-select-label">{t('allFamilies')}</InputLabel>
          <Select
            labelId="family-select-label"
            id="family-select"
            value={selectedFamily}
            label={t('allFamilies')}
            onChange={onFamilyChange}
          >
            {families.map(family => (
              <MenuItem key={family} value={family}>{family}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <div style={{ position: 'relative', borderRadius: '4px', backgroundColor: alpha('#fff', 0.15), '&:hover': { backgroundColor: alpha('#fff', 0.25) }, marginLeft: 0, width: '100%', sm: { marginLeft: '8px', width: 'auto' } }}>
          <div style={{ padding: '0 16px', height: '100%', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder={t('search') + '…'}
            style={{ color: 'inherit', padding: '8px 8px 8px 0', paddingLeft: `calc(1em + 32px)`, width: '100%', sm: { width: '12ch', '&:focus': { width: '20ch' } } }}
            onChange={onSearchChange}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default AppNavbar;
