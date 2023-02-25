import React,{ useState } from 'react';

import TableOfGastos from './TableOfGastos';
import { firestore } from './Backend/Firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const converter = {
      toFirestore(post) {
          return {
              name: post.name,
          }
      },
      fromFirestore(snapshot, options) {
          const data = snapshot.data(options);
          return {
              id: snapshot.id,
              name: data.name,
          }
      },
} 

const gastusinRef = firestore.collection('gastusin').withConverter(converter);
const query = gastusinRef.orderBy('name').limit(69);

const Dashboard = () => {

  const [mgaGastos, loading, error] = useCollectionData(query);

  console.log(mgaGastos);

  return (<>
    <AddForm />
    <TableOfGastos data={mgaGastos} />
  </>);
};

const AddForm = () => {

  const [formValue, setFormValue] = useState('');

  const addGastusin = async (e) => {
    e.preventDefault();

    await gastusinRef.add({
      name: formValue
    });

    setFormValue('');
  }

  return (<>
    <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
    >
      <Box component="form" onSubmit={addGastusin} sx={{ mt: 1 }}>
        <TextField 
          fullWidth
          id="field-gastos-name" 
          label="Gastusin" 
          variant="outlined" 
          value={formValue} 
          onChange={(e) => setFormValue(e.target.value)} />
        <Button
          sx={{ mt: 3, mb: 2 }}
          fullWidth 
          type="submit" 
          disabled={!formValue} 
          variant="contained"
          color="secondary">
          Add
        </Button>
      </Box>
    </Box>
  </>);
}

export default Dashboard;
