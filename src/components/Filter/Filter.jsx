
import { useSelector, useDispatch } from 'react-redux';
import { inputFilter, getFilter } from 'redux/filterSlice';
import { Input, Label } from "./Filter.styled";



const Filter = () => {
    const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  //----Обновляем фильтр----
  function changeFilter(event) {
    dispatch(inputFilter(event.currentTarget.value));
  }
  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filter} onChange={changeFilter} />
    </Label>
  );
};

export default Filter;




