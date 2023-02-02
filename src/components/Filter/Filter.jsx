import { useSelector, useDispatch } from 'react-redux';
import { onFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import { Input, Label } from "./Filter.styled";


const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
 
  const inputFilter=(event)=> {
    dispatch(onFilter(event.currentTarget.value));
  }
  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filter} onChange={inputFilter} />
    </Label>
  );
};

export default Filter;




