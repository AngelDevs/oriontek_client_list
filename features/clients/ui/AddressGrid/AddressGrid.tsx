import { Address } from "../../models/address";
import AddressCard from "./AddressCard";

type Props = {
  addresses: Address[];
};

const AddressGrid = (props: Props) => {
  const { addresses } = props;

  if (addresses.length === 0) {
    return <> </>;
  }

  return (
    <div className="grid grid-cols-fill-72 gap-8">
      {addresses.map((address) => {
        return <AddressCard key={address.id} address={address} />;
      })}
    </div>
  );
};

export default AddressGrid;
