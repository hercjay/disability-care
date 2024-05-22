import pandas as pd

# # Read the original CSV file
# df = pd.read_csv('dhds-dataset-full.csv')

# # Filter the data
# filtered_df = df[(df['Category'] == 'Chronic Conditions') & (df['Indicator'] == 'Ever had cancer (excluding skin cancer) among adults 18 years of age or older')]

# # Export the filtered data to a new CSV file
# filtered_df.to_csv('filtered_data.csv', index=False)


# Load the original dataset
df = pd.read_csv('dhds-cancer.csv')

# Filter the dataset to include only the necessary columns and rows
df_filtered = df[(df['StratificationCategory2'] == 'Age Group') & 
                 (df['Stratification2'].isin(['18-44', '45-64', '65+']))] 
                #  & 
                #  (df['Stratification1'].isin(['No Disability', 'Any Disability']))]

# Select only the relevant columns
df_filtered = df_filtered[['Stratification2', 'Stratification1', 'Response']]

# Save the filtered dataset to a new CSV file
df_filtered.to_csv('dhds-cancer-age.csv', index=False)