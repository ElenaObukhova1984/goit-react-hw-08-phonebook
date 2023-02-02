import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import { Input, Label } from "./Filter.styled";


const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
 
  const inputFilter=(event)=> {
    dispatch(changeFilter(event.currentTarget.value));
  }
  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filter} onChange={inputFilter} />
    </Label>
  );
};

export default Filter;




