import { Button, FormControl, FormLabel, TextField } from "@mui/material";

export default function () {
    return (
        <FormControl>
            <FormLabel>Name</FormLabel>
            <TextField></TextField>
            <FormLabel>Email</FormLabel>
            <TextField></TextField>
            <Button>Submit</Button>
        </FormControl>
    );
}
