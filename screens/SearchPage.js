import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

const SearchPage = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (query) => {
        setSearchQuery(query);
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Search Page</Text>
            </View>

            {/* Search Input */}
            <TextInput
                style={styles.input}
                placeholder="Search here..."
                value={searchQuery}
                onChangeText={handleSearchChange}
            />
            <Text>I am looking for: {searchQuery}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    header: {
        width: '100%',
        height: 60, // Adjust the height as needed
        backgroundColor: '#9e38ee',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: 'white',
        fontSize: 20, // Adjust the font size as needed
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: '80%'
    }
});

export default SearchPage;
