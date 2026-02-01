export interface ColumnDef<TData> {
  key: keyof TData;
  header: string;
}
