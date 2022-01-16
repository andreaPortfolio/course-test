import {Flex, Text, Button, DefaultStyledProps, Box} from "../../";
import { ReactElement} from "react";

interface Props extends DefaultStyledProps {
  data: any[];
  columns: { title: string; name: string }[];
  handleDelete?: (id: number) => void;
  handleEdit?: (id: number) => void;
}

const TableComponent = ({
  data = [],
  columns,
  handleDelete,
  handleEdit,
  ...rest
}: Props): ReactElement => {
  const onClickDelete = (id: number) => {
    if (handleDelete && id) {
      handleDelete(id);
    }
  };
  const onClickEdit = (id: number) => {
    if (handleEdit && id) {
      handleEdit(id);
    }
  };

  return (
    <Flex
      flexDirection="column"
      width="100%"
      boxShadow="0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"
      {...rest}
      padding="16px"
      backgroundColor="white"
    >
      <Flex
        padding="20px"
        alignItems="baseline"
    
      >
        {columns.map(({ title }, index) => (
          <Flex key={`${index}-header`} width={`calc(100%/ ${columns.length})`}>
            <Flex width="100%">
              <Text
                fontSize="16px"
                fontWeight={700}
                letterSpacing={0}
                lineHeight="16px"
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
              >
                {title}
              </Text>
            </Flex>
          </Flex>
        ))}
        <Flex width="200px" >Actions</Flex>
      </Flex>
      {data.map((row, index) => (
        <Flex
        key={`${index}-data`}
          height="56px"
          alignItems="center"
          paddingLeft="20px"
          paddingRight="20px"
        >
          {columns.map((column, index) => (
            <Flex
              key={`${index}-column`}
              width={`calc(100%/ ${columns.length})`}
            >
                <Text
                  fontSize="16px"
                  fontWeight={400}
                  letterSpacing={0}
                  lineHeight="16px"
                >
                  {row[column.name]}
                </Text>
            </Flex>
          ))}
          <Flex width="200px" >
            <Button width='50px' onClick={() => onClickDelete(row?.id)}><i className="far fa-trash-alt"/></Button>
            <Box width='10px'/>
            <Button width='50px' onClick={() => onClickEdit(row?.id)}><i className="far fa-edit"/>
            </Button>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default TableComponent;
