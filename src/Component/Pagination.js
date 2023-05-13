import Pagination from 'react-bootstrap/Pagination';

const PaginationList = (props) => {
  const { handlePageChange, totalPages, currentPage } = props;
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handleDecrement = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleIncrement = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <Pagination>
      <Pagination.Prev onClick={handleDecrement} disabled={currentPage <= 1} />
      {pageNumbers.map((pageNumber) => (
        <Pagination.Item
          key={pageNumber}
          active={pageNumber === currentPage}
          onClick={() => handlePageChange(pageNumber)}
        >
          {pageNumber}
        </Pagination.Item>
      ))}
      <Pagination.Next onClick={handleIncrement} disabled={currentPage >= totalPages} />
    </Pagination>
  );
};

export default PaginationList;
