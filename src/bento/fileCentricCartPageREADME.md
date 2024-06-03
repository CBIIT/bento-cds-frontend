### The “Selected Files” Cart Page 
The Cancer Research Data Commons (CRDC) is a cloud-based data repository that facilitates cohort building and discovery through its interactive "Explore" dashboard. Once participants and samples of interest are identified, their associated files can be added to the "Selected Files" cart. This page aims to compile data files of interest and facilitate downstream analysis using publicly available or custom cloud-based bioinformatic workflows, pipelines, or applications within the CRDC ecosystem.
 

### The Concept of a File Manifest in the CRDC
The CRDC is an ecosystem that securely provides access to cancer research data and seamlessly integrates with analytics platforms and tools to empower scientific discovery. It consists of repositories, infrastructure, and cloud resources. Repositories host participant-, sample-, and file-level data paired with cohort building tools, while the infrastructure provides interoperability tools for data interrogation and mechanisms for authentication, authorization, and permanent digital object identifiers for files. Cloud resources offer web-based applications and analysis tools to support downstream computational research. Data transfer from repositories to cloud resources commonly employs a file manifest, which is a comma-separated value (CSV) file containing metadata essential for a downstream cloud resource, such as the Cancer Genomics Cloud (CGC), to access and stream selected files directly from cloud storage. This eliminates the need for users to download files locally, ensuring safe and efficient data transfer within the CRDC ecosystem.
 

### The CDS File Manifest
Within the Cancer Data Service (CDS), users can easily generate a file manifest using the "Explore" dashboard. Data can be filtered by various attributes using a robust menu of facet filters. Participants, samples, and files matching selected filter criteria are displayed in a table and represented by color-coded widgets. After completing the desired level of filtering, users can add files associated with participants and samples to their "Selected Files" cart page. Clicking the "Download File Manifest" button generates a file manifest compatible with any CRDC Cloud Resource. The CDS file manifest is timestamped at the time of download and includes essential metadata such as *drs_uri, file_name, Participant ID, Md5sum, Study Name, Accession, Sample ID, Study Access, File Type, Gender, Race, Primary Diagnosis, Sample Tumor Status, Analyte Type, Organ or Tissue, Study Data Type, Library Strategy, Image Modality, Experimental Strategy, Library Layouts, License, File Size (in bytes), and User Comments.*

### Importing the CDS File Manifest to the Cancer Genomics Cloud (CGC)
After downloading the file manifest from CDS, users need not download any CDS files locally. Instead, the file manifest provides instructions for Cloud Resources to access these files directly from cloud storage on demand.
<!-- PAGE BREAK --> 
**To export the CDS file manifest to the Cancer Genomics Cloud (CGC), follow these steps:**
 

* Create an account or log in at:  [https://www.cancergenomicscloud.org/](https://www.cancergenomicscloud.org/)

* Create a project or select an existing project suitable for digital access to the files in the file manifest.

* From the CGC dashboard navigation bar, select “Files” and then click on the “+ Add files” button dropdown menu.

* From the “Import files from” dropdown menu, select “Cancer Data Service (CDS)”.

* Upload the local copy of the CDS file manifest generated from CDS by dragging the file to the drop zone or clicking on the “Browse files” button .

* Use the free text search text box to add applicable tags or comments associated with the batch of files being imported and click on the “Import” button.

* DRS (Data Repository Service) identifiers will now be displayed for each file from the file manifest imported within the selected CGC project.

* These files can now be viewed in the CGC Genome Browser or selected as inputs for downstream analysis.


### The Export to the Cancer Genomics Cloud (CGC) Button
This button facilitates the simple and immediate transfer of a file manifest generated in the CDS to the Cancer Genomics Cloud (CGC). With just a single click, files are ready for analysis within the CGC. With a cohort of files of interest already derived via the CDS Explore Dashboard and added to the “Selected Files” Cart page, clicking the “Export to Cancer Genomics Cloud” button will trigger the transfer of all necessary file metadata. Once authenticated with the CGC, users can digitally access the files from CDS cloud storage within a CGC project.
<!-- PAGE BREAK --> 
**To use the Export to the Cancer Genomics Cloud (CGC) Button, follow these steps:**

- Create a CGC account and project at:  [https://www.cancergenomicscloud.org/](https://www.cancergenomicscloud.org/) 

* Navigate to the CDS Explore dashboard: [https://dataservice.datacommons.cancer.gov/#/data](https://dataservice.datacommons.cancer.gov/#/data)

- Build a cohort of interest using the faceted search menu

* Add participants, samples, or files to the "Selected Files" Cart

- Navigate to the "Selected Files" Cart page:  [https://dataservice.datacommons.cancer.gov/#/fileCentricCart](https://dataservice.datacommons.cancer.gov/#/fileCentricCart)

* Expand the dropdown menu of the Available Export Options button

- Click on "Export to Cancer Genomics Cloud"

* Follow the prompts to login to the CGC

- Select a Destination project from the dropdown menu

* Select the checkbox to agree to the CGC terms

- Click on the "Import Data" button

* Files are now ready for analysis within the CGC project