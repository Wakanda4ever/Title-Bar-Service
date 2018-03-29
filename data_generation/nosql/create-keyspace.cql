CREATE KEYSPACE IF NOT EXISTS chompy_ks WITH replication = {
  'class': 'NetworkTopologyStrategy',
  'datacenter1': 1
};
USE chompy_ks;

CREATE COLUMNFAMILY business (
id INT,
name VARCHAR,
claimed BOOLEAN,
review_count INT,
stars FLOAT,
dollar_signs FLOAT,
categories SET<TEXT>,
PRIMARY KEY (id)
);
