Example of `Column` without a` Grid` or `Row`:

    columnStyles = { backgroundColor: '#1565C0', border: '1px solid white', textAlign: 'center' };
    <div>
      <Column sizes={{ sm: 1 }} style={columnStyles}><p>One</p></Column>
      <Column sizes={{ md: 3 }} style={columnStyles}><p>Two</p></Column>
      <Column sizes={{ sm: 2, md: 1, mdLg: 4, lg: 5, xl: 4 }} style={columnStyles}><p>Three</p></Column>
    </div>
