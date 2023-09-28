import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

import {
    DateInput,
    Edit,
    Create,
    List,
    Form,
    SaveButton,
    TextInput,
} from 'react-admin';


export const CohortForm  = props => (
    <Create {...props} resource="studentData">
        <Form>
           <Grid container width="100%" spacing={2} m="0.5em" >
              <Grid item xs={8}>

            <Typography variant="h6" gutterBottom>
                        Cohort Details
             </Typography>
             <Box display="flex">
                        <Box flex={1} mr="0.5em">
                            <TextInput
                              
                                source="cohort_Number"
                                isRequired
                                fullWidth
                            />
                        </Box>

                        <Box flex={1} ml="0.5em">
                            <TextInput
                                source="cohort_Name"
                                isRequired
                                fullWidth
                            />
                        </Box>
                    </Box>

                    <Box display="flex">
                        <Box flex={1} mr="0.5em">
                            <TextInput
                                type="number"
                                source="batch_Number"
                                fullWidth
                            />
                        </Box>

                        <Box flex={1} ml="0.5em">
                            <TextInput
                                source="code_target"
                                fullWidth
                            />
                        </Box>
                    </Box>
                </Grid>
         

        {/* Student Data */}
            
                  <Grid item xs={8}>
                  <Typography variant="h6" gutterBottom>
                   Students Data
                   </Typography>
                    <Box display="flex">

                        <Box flex={1} mr="0em">
                            <TextInput
                                source="first_name"
                                isRequired
                                fullWidth
                            />
                        </Box>

                        <Box flex={1} ml="0.5em">
                            <TextInput
                                source="last_name"
                                isRequired
                                fullWidth
                            />
                        </Box>

                        <Box flex={1} ml="0.5em">
                            <DateInput
                                source="birthday"
                                fullWidth
                                helperText={false}
                            />
                        </Box>

                    </Box>

                    <Box display="flex">
                        <Box flex={1} mr="0.5em">
                            <TextInput
                                source="mobile"
                                isRequired
                                fullWidth
                            />
                        </Box>

                        <Box flex={1} ml="0.5em">
                            <TextInput
                                type="email"
                                source="email"
                                isRequired
                                fullWidth
                            />
                        </Box>
                    </Box>

                    <Box display="flex">
                       <Box flex={1} mr="0em">
                        <TextInput
                             source="github_link"
                             isRequired
                             fullWidth
                             />
                       </Box>
                    </Box>
                    {/* <Box mt="1em" /> */}

                    <Grid item xs={12}>
                       <SaveButton
                        />
                    </Grid>

                </Grid>
         </Grid>
        </Form>
    </Create>
);
