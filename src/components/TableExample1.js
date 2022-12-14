import { Button, Space, Table, Tag } from "antd";

const data = [
    {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
        tags: ["nice", "developer"]
    },
    {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
        tags: ["loser"]
    },
    {
        key: "3",
        name: "Joe Black",
        age: 22,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"]
    },
    {
        key: "4",
        name: "Jose Arrini",
        age: 35,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"]
    },
    {
        key: "5",
        name: "Martin Haelok",
        age: 38,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"]
    }
];

const columns = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: (text) => <Button type="link">{text}</Button>
    },
    {
        title: "Age",
        dataIndex: "age",
        key: "age",
        sorter: (a, b) => a.age - b.age
    },
    {
        title: "Address",
        dataIndex: "address",
        key: "address"
    },
    {
        title: "Tags",
        key: "tags",
        dataIndex: "tags",
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? "geekblue" : "green";

                    if (tag === "loser") {
                        color = "volcano";
                    }

                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        )
    },
    {
        title: "Action",
        key: "action",
        render: (_, record) => (
            <Space size="middle">
                <Button type="link">Invite {record.name}</Button>
                <Button type="link">Delete</Button>
            </Space>
        )
    },
    {
        title: "Invited",
        key: "key",
        render: (record) => {
            const color = record.age > 32 ? "green" : "red";
            const status = record.age > 32 ? "Invited" : "Not invited";
            return <Tag color={color}>{status}</Tag>;
        }
    }
];

const TableExample1 = () => {
    return (
        <>
            <div>Table-1</div>
            <Table dataSource={data} columns={columns} />
        </>
    );
};

export default TableExample1;
