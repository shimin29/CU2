import { Box, Card, CardContent, Typography, Stack, TextField, Button, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel, RadioGroup, Radio, FormLabel, Switch, Slider } from "@mui/material";

const MuiInputsShowcase = () => {
    return (
        <Box sx={{ maxWidth: 600, mx: "auto", p: 3 }}>
            <Card variant="outlined" sx={{ borderRadius: 3, boxShadow: 2 }}>
                <CardContent sx={{ p: 4 }}>
                    <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 600 }}>
                        MUI Inputs Collection
                    </Typography>

                    <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                        A static reference file showing the basic visual rendering of each input element.
                    </Typography>

                    <Stack spacing={4}>
                        {/* 1. Text Fields */}
                        <TextField label="Standard Text Field" variant="outlined" placeholder="Type text here..." fullWidth />

                        <TextField label="Multiline Text Field" variant="outlined" multiline rows={3} placeholder="Type longer paragraphs here..." fullWidth />

                        {/* 2. Select Dropdown */}
                        <FormControl fullWidth>
                            <InputLabel id="static-select-label">Dropdown Select</InputLabel>
                            <Select labelId="static-select-label" label="Dropdown Select" defaultValue="">
                                <MenuItem value="option1">Option One</MenuItem>
                                <MenuItem value="option2">Option Two</MenuItem>
                                <MenuItem value="option3">Option Three</MenuItem>
                            </Select>
                        </FormControl>

                        {/* 3. Radio Group */}
                        <FormControl component="fieldset">
                            <FormLabel id="static-radio-group-label" sx={{ mb: 1 }}>
                                Radio Options
                            </FormLabel>
                            <RadioGroup aria-labelledby="static-radio-group-label" row>
                                <FormControlLabel value="a" control={<Radio />} label="Option A" />
                                <FormControlLabel value="b" control={<Radio />} label="Option B" />
                            </RadioGroup>
                        </FormControl>

                        {/* 4. Checkbox */}
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Standard Checkbox Toggle" />

                        {/* 5. Switch */}
                        <FormControlLabel control={<Switch defaultChecked color="primary" />} label="Toggle Switch Style" />

                        {/* 6. Slider */}
                        <Box>
                            <Typography id="static-slider-label" gutterBottom variant="body2" color="text.secondary">
                                Range Slider
                            </Typography>
                            <Slider aria-labelledby="static-slider-label" defaultValue={50} valueLabelDisplay="auto" min={0} max={100} />
                        </Box>

                        {/* 7. Action Buttons */}
                        <Stack direction="row" spacing={2} justifyContent="flex-end" sx={{ pt: 2 }}>
                            <Button variant="text" color="inherit">
                                Cancel Style
                            </Button>
                            <Button variant="contained" color="primary">
                                Action Style
                            </Button>
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    );
};

export default MuiInputsShowcase;
