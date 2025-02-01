import moment from 'moment';
import { Card } from 'semantic-ui-react'

const momentCard = ({momentData}) => (
    <Card>
    <Card.Content>
    <p>Day: {moment().format('dddd')}</p>
    <p>Date: {moment().format('LL')}</p>
    </Card.Content>
  </Card>
)
export default momentCard;