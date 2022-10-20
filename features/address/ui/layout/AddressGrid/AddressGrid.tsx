import { Address } from "../../../models/address";
import AddressCard from "./AddressCard";

type Props = {
  addresses: Address[];
  onClickDelete: (
    e: React.MouseEvent<SVGElement, MouseEvent>,
    address: Address
  ) => void;
  onClickUpdateMainAddress: (address: Address) => void;
};

const AddressGrid = (props: Props) => {
  const { addresses, onClickDelete } = props;

  if (addresses.length === 0) {
    return <> </>;
  }

  return (
    <div className="grid grid-cols-fill-72 gap-8">
      {addresses.map((address) => {
        return (
          <AddressCard
            key={address.id}
            address={address}
            onClickDelete={onClickDelete}
            onClickUpdateMainAddress={props.onClickUpdateMainAddress}
          />
        );
      })}
    </div>
  );
};

export default AddressGrid;
