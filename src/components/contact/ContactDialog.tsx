import { Dialog, DialogContent } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../redux/store.ts";
import { openSkillDialog } from "../../redux/reducers/drawerSlice.ts";
import {Contact} from "./Contact.tsx";



export const ContactDialog = () => {
    const dispatch = useDispatch();
    const open = useSelector((state: RootState) => state.dialog.open);

    const handleClose = () => {
        dispatch(openSkillDialog({}));
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="md"
            fullWidth
            PaperProps={{
                sx: {
                    bgcolor: 'transparent',
                    boxShadow: 'none',
                }
            }}
        >
            <DialogContent sx={{ p: 0 }}>
                <Contact />
            </DialogContent>
        </Dialog>
    );
}; 