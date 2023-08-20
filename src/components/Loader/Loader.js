import { MagnifyingGlass } from 'react-loader-spinner';
import { LoaderBlock } from './Loader.styled';

export const LoaderSearch = () => {
  return (
    <LoaderBlock>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
    </LoaderBlock>
  );
};
