import React, { useState } from 'react';
import styles from './CountryPhoneInput.module.css';
import { COUNTRY_LIST } from './countryList';

function CountryPhoneInput({ name, value, onChange, required }) {
  const getCountryByDial = (val) => {
    if (!val) return COUNTRY_LIST.find(c => c[1] === 'tr');
    const match = COUNTRY_LIST.find(c => val.startsWith('+' + c[2]));
    return match || COUNTRY_LIST.find(c => c[1] === 'tr');
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const selected = getCountryByDial(value);
  const phoneValue = value ? value.replace('+' + selected[2], '').trim() : '';

  const handleCountrySelect = (country) => {
    setDropdownOpen(false);
    onChange('+' + country[2] + ' ');
  };

  const handlePhoneChange = (e) => {
    let digits = e.target.value.replace(/[^\d]/g, '');
    onChange('+' + selected[2] + ' ' + digits);
  };

  return (
    <div className={styles.customPhoneInput} style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
      <div
        className={styles.flagDropdown}
        tabIndex={0}
        onClick={() => setDropdownOpen(v => !v)}
        onBlur={() => setDropdownOpen(false)}
        style={{ cursor: 'pointer', minWidth: 40, display: 'flex', alignItems: 'center' }}
      >
        <img
          src={`/svg/${selected[1]}.svg`}
          alt={selected[0]}
          style={{ width: 28, height: 20, borderRadius: 3, border: '1px solid #3A3C4A', background: '#fff' }}
        />
        <span style={{ marginLeft: 10, color: '#888' }}>▼</span>
        {dropdownOpen && (
          <div style={{
            position: 'absolute',
            zIndex: 100,
            left: 0,
            top: '110%',
            background: '#23252C',
            border: '1px solid #3A3C4A',
            borderRadius: 8,
            maxHeight: 300,
            overflowY: 'auto',
            width: 260,
            boxShadow: '0 2px 12px #0008'
          }}>
            {COUNTRY_LIST.map(c => (
              <div
                key={c[1]}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '7px 12px',
                  cursor: 'pointer',
                  gap: 12,
                  background: selected[1] === c[1] ? '#2d3140' : 'transparent'
                }}
                onMouseDown={() => handleCountrySelect(c)}
              >
                <img src={`/svg/${c[1]}.svg`} alt={c[0]} style={{ width: 24, height: 16, borderRadius: 2, border: '1px solid #3A3C4A', background: '#fff' }} />
                <span style={{ color: '#e5e5e5', fontSize: 15 }}>{c[0]}</span>
                <span style={{ color: '#b8b8b8', fontWeight: 500, marginLeft: 'auto' }}>+{c[2]}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <input
        type="tel"
        name={name}
        value={value || ''}
        onChange={e => {
          let val = e.target.value;
          let match = COUNTRY_LIST.find(c => val.startsWith('+' + c[2]));
          if (match) {
            onChange(val);
          } else {
            let codeMatch = val.match(/^\+(\d{1,4})/);
            if (codeMatch) {
              let found = COUNTRY_LIST.find(c => c[2] === codeMatch[1]);
              if (found) {
                onChange(val);
              } else {
                onChange(val);
              }
            } else {
              onChange(val);
            }
          }
        }}
        required={required}
        className={styles.input}
        placeholder="Telefon numarası"
        autoComplete="tel"
        style={{
          marginLeft: 10,
          background: 'transparent',
          color: '#e5e5e5',
          border: 'none',
          outline: 'none',
          fontSize: 15,
          flex: 1
        }}
      />
    </div>
  );
}

export default CountryPhoneInput;
