import { createColumnHelper  } from '@tanstack/react-table';

  const columnHelper = createColumnHelper();

    export const COLUMNS = [
      columnHelper.accessor('id', {
        header: 'ID',
      }),
      columnHelper.accessor('name', {
        header: 'Name',
      }),
      columnHelper.accessor('age', {
        header: 'Age',
      }),
    ];