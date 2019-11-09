import WrappedInput from '~components/forms/WrappedInput';
import WrappedSelect from '~components/forms/WrappedSelect';
import WrappedDatePicker from '~components/forms/WrappedDatePicker';
import { statusLabels } from '~utils/constants';

const nameProps = {
  component: WrappedInput,
  displayName: 'Nombre de Película',
  type: 'text',
  id: 'name',
  name: 'name',
  placeholder: 'Ingresa nombre',
  required: true,
};

const dateProps = {
  component: WrappedDatePicker,
  displayName: 'Fecha de Publicación',
  type: 'date',
  id: 'date',
  name: 'date',
  required: true,
};

const statusProps = {
  component: WrappedSelect,
  displayName: 'Estado',
  type: 'text',
  id: 'status',
  name: 'status',
  options: statusLabels,
  required: true,
}

export {
  nameProps,
  dateProps,
  statusProps
}
