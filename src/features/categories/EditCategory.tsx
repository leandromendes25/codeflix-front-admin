import { Box, FormControl, Grid, Paper, TextField, Typography } from "@mui/material";
import { category } from "./CategorySlice";
import { isDisabled } from "@testing-library/user-event/dist/types/utils";
import { useParams } from "react-router-dom";

export const EditCategory = () => {
  const id = useParams().id || "";
  return (
    <Box>
      {/* Paper por lembrar um papel */}
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Edit Category</Typography>
          </Box>
        </Box>
        <Box p={2}>
          <form>
            <Grid container spacing={3}>
              <FormControl>
                <TextField required name="name" label="name" value={category.name} disabled={isDisabled} onChange={handleChange} />
              </FormControl>
            </Grid>
          </form>
        </Box>
      </Paper>
    </Box>
  );
};

export default EditCategory;