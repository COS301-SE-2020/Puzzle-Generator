import * as THREE from 'src/assets/js/three.module.js';
import { OrbitControls } from 'src/assets/js/OrbitControls.js';
export { initiate3DCanvas, render3D };

let scene, camera, renderer, line, points, pieceGeometry, pieceGeometryArray, piece;
let factor = 5;

function initiate3DCanvas(height, width)
{
	points = [];
	pieceGeometryArray = [];
	scene = new THREE.Scene();
	scene.background = new THREE.Color('white');
	camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
	renderer = new THREE.WebGLRenderer({antialias: true});
	// renderer = new THREE.WebGLRenderer();
	renderer.setSize(height, width);

	// camera.lookAt( 0, 0, 0 );
	camera.position.z = 750;
	const controls = new OrbitControls(camera, renderer.domElement);
	controls.target.set(0, 10, 0);
	controls.update();
}

function render3D(jsonData, appendedString)
{
	while(scene.children.length > 0)
		scene.remove(scene.children[0]);
	
	let pieceGeometryArray = extractPoints(jsonData.pieces, jsonData.depths);
	let pieceMeshArray = generateAndColorMeshes(pieceGeometryArray, jsonData.colors);
	addMeshesToScene(pieceMeshArray);
	document.getElementById('container'+appendedString).innerHTML = "";
	document.getElementById('container'+appendedString).appendChild(renderer.domElement);
	animate();
}

function addMeshesToScene(meshArray)
{
	for(let mesh of meshArray)
	{
		mesh.frustumCulled = false;
		// Add to scene
		scene.add(mesh);
	}
}

function generateAndColorMeshes(pieceGeometryArray, colors)
{
	let tempPieceMeshArray = [];
	let material;
	for(let i = 0; i <  pieceGeometryArray.length; i++)
	{
		// Create mesh with geo and MeshBasicMaterial
		material = new THREE.MeshBasicMaterial({color: colors[(i % colors.length)]});
		tempPieceMeshArray.push(new THREE.Mesh(pieceGeometryArray[i], material));
	}

	return tempPieceMeshArray;
}

function extractPoints(pieces, depths)
{
	let topLeft, topRight, bottomLeft, bottomRight, piece;
	let tempPieceGeometryArray = [];
	for(let pieceIndex = 0; pieceIndex < pieces.length; pieceIndex++)
	{
		piece = pieces[pieceIndex];
		pieceGeometry = new THREE.Geometry();
		for(let index = 0; index < piece.length; index+=4)
		{
			// topLeft = new THREE.Vector3(piece[index]/10, piece[index+1]/10, 10);
			// bottomLeft = new THREE.Vector3(piece[index]/10, piece[index+1]/10, 0);
			// topRight = new THREE.Vector3(piece[index+2]/10, piece[index+3]/10, 10);
			// bottomRight = new THREE.Vector3(piece[index+2]/10, piece[index+3]/10, 0);
			// topLeft = new THREE.Vector3(piece[index]-250, piece[index+1]-250, 100);
			// bottomLeft = new THREE.Vector3(piece[index]-250, piece[index+1]-250, 0);
			// topRight = new THREE.Vector3(piece[index+2]-250, piece[index+3]-250, 100);
			// bottomRight = new THREE.Vector3(piece[index+2]-250, piece[index+3]-250, 0);
			topLeft = new THREE.Vector3( ( piece[index]-250 ) / factor , (piece[index+1]-250)/factor , getDepth(depths[pieceIndex]));
			bottomLeft = new THREE.Vector3( ( piece[index]-250 ) / factor, ( piece[index+1]-250 ) / factor, 0);
			topRight = new THREE.Vector3( ( piece[index+2]-250 ) / factor, ( piece[index+3]-250 ) / factor, getDepth(depths[pieceIndex]));
			bottomRight = new THREE.Vector3( ( piece[index+2]-250 ) / factor, ( piece[index+3]-250 ) / factor, 0);
			// topLeft = new THREE.Vector3(piece[index], piece[index+1], 100);
			// bottomLeft = new THREE.Vector3(piece[index], piece[index+1], 0);
			// topRight = new THREE.Vector3(piece[index+2], piece[index+3], 100);
			// bottomRight = new THREE.Vector3(piece[index+2], piece[index+3], 0);
			buildSquare(bottomLeft, bottomRight, topRight, topLeft, index);
		}
		tempPieceGeometryArray.push(pieceGeometry);

		pieceGeometry = new THREE.Geometry();
		for(let index = 0; index < piece.length; index+=4)
		{
			topLeft = new THREE.Vector3( ( piece[index]-250 ) / factor , (piece[index+1]-250)/factor , ( 500 / factor ));
			bottomLeft = new THREE.Vector3( ( piece[index]-250 ) / factor, ( piece[index+1]-250 ) / factor, getDepth(depths[pieceIndex]));
			topRight = new THREE.Vector3( ( piece[index+2]-250 ) / factor, ( piece[index+3]-250 ) / factor, ( 500 / factor ));
			bottomRight = new THREE.Vector3( ( piece[index+2]-250 ) / factor, ( piece[index+3]-250 ) / factor, getDepth(depths[pieceIndex]));
			buildSquare(bottomLeft, bottomRight, topRight, topLeft, index);
		}
		tempPieceGeometryArray.push(pieceGeometry);
	}

	return tempPieceGeometryArray;
}

function buildSquare(bottomLeft, bottomRight, topRight, topLeft, index)
{
	pieceGeometry.vertices.push(bottomLeft, bottomRight, topRight, topLeft);
	buildTriangle(index, index+1, index+2);
	buildTriangle(index+2, index+3, index);
}

function buildTriangle(point1, point2, point3)
{
	pieceGeometry.faces.push(new THREE.Face3(point1, point2, point3));
}

function getDepth(nth)
{
	return ((nth/10) * 500) / factor;
}

function animate()
{
	requestAnimationFrame(animate);
	// piece.rotation.x += 0.01;
	// piece.rotation.y += 0.01;
	// piece.rotation.z += 0.01;
	renderer.render(scene, camera);
}