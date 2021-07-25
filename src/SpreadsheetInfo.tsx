import { Link, Text, Grid } from '@geist-ui/react';

interface Props { }

const SpreadsheetInfo: React.FC<Props> = () => (
    <Grid.Container>
        <Grid xs={24} justify='center'>
            <Text h4 style={{ textAlign: 'center' }}>
                Edit the spreadsheet below to see live changes!
            </Text>
        </Grid>
        <Grid xs={24} justify='center'>
            <Link href="https://docs.google.com/spreadsheets/d/1plCq9_48CZgyrNXgD2Jalg1v0dz1rq3-0977FMuHcPo/edit?usp=sharing" block>
                Spreadsheet Link
            </Link>
        </Grid>
    </Grid.Container>
)

export default SpreadsheetInfo