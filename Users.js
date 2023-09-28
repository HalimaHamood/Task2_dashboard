import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    FunctionField,
    SelectField 
  } from 'react-admin';

  
   
  export const UserList = props => (
    
    <List {...props} resource="students">
      <Datagrid>

         <SelectField source="cohort" choices={[
             { id: '1', cohort_Number: '2' },
             { id: '2', cohort_Number: '3' },
              ]} />
        <TextField source="StudentName" />    
        <TextField source="NoOfProjects" />   
        <TextField source="NoOfContributions" />   
        {/* <FunctionField label="username"  render={record => (
          <Link to={`/users/${record.username}/repos`}> {record.username} </Link>
        )} /> */}
     
      </Datagrid>
    </List>
  );
   
 